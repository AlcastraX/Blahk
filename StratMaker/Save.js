
const SAVE_PREFIX = 'stratmaker_save_';
const MAX_SLOTS = 10;
const toggle = true
const MenuButton = document.querySelector('.SaveLoad')
const SaveLoadMenu = document.querySelector('.SaveLoadMenu')
const open = document.querySelector('.open')
const SaveLoad = document.querySelector('.SaveLoadList')
const ConfirmWarning = document.querySelector('.ConfirmWarning')
const confirmYes = document.getElementById('confirmYes')
const confirmNo = document.getElementById('confirmNo')
const overlay = document.getElementById('Overlay')
const FileName = document.getElementById('FileInput')
let slotToDelete = null
MenuButton.addEventListener('click', () => {
    SaveLoadMenu.classList.toggle('open')
    overlay.classList.toggle('open')
})
overlay.addEventListener('click', () => {
overlay.classList.remove('open')
SaveLoadMenu.classList.remove('open')
})
function saveToSlot(slotNumber, workspace) {
    if (slotNumber < 1 || slotNumber > MAX_SLOTS) {
        return;
    }
    const Name = FileName.value.trim() || `Slot ${slotNumber}`
    const state = Blockly.serialization.workspaces.save(workspace);
    const data = {
        state: state,
        timestamp: new Date().toISOString(),
        name: `${Name}`
    };
    localStorage.setItem(SAVE_PREFIX + slotNumber, JSON.stringify(data));
    console.log(`Saved to Slot ${slotNumber}`);
    renderSlots()
}

function loadFromSlot(slotNumber, workspace) {
    const raw = localStorage.getItem(SAVE_PREFIX + slotNumber);
    if (!raw) {
        console.warn(`Slot ${slotNumber} is Empty`);
        return false;
    }
    const data = JSON.parse(raw);
        FileName.value = `${data.name}`
    workspace.clear(); 
    Blockly.serialization.workspaces.load(data.state, workspace);
    window.alert(`Loaded from slot ${slotNumber}, saved: ${formatTime(data.timestamp)}`);
    renderSlots()
    return true;
}

function deleteSlot(slotNumber) {
    localStorage.removeItem(SAVE_PREFIX + slotNumber);
}

function getSlotInfo(slotNumber) {
    const raw = localStorage.getItem(SAVE_PREFIX + slotNumber);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return { name: data.name, timestamp: data.timestamp};
}
function formatTime(isoString) {
    const d = new Date(isoString);
    const absolute = d.toLocaleString(undefined, { 
        month: 'short', day: 'numeric', 
        hour: '2-digit', minute: '2-digit' 
    });
    
    const diff = Date.now() - d.getTime();
    const mins = Math.floor(diff / 60000);
    let relative;
    if (mins < 1) relative = 'Just now';
    else if (mins < 60) relative = `${mins}m ago`;
    else if (mins < 1440) relative = `${Math.floor(mins / 60)}h ago`;
    else relative = `${Math.floor(mins / 1440)}d ago`;

    return `${relative} · ${absolute}`;
}
function renderSlots() {
    SaveLoad.innerHTML = '';
    for (let i = 1; i <= MAX_SLOTS ; i++) {
        const info = getSlotInfo(i);
        const div = document.createElement('div');
        div.className = 'item-split';
        
        const label = info 
            ? `${info.name} — ${formatTime(info.timestamp)}` 
            : `Slot ${i} — empty`;
        
        div.innerHTML += `
            <span class="item-text">${label}</span>
            <span class="item-text" onclick="saveToSlot(${i}, workspace)" style="text-align:center;">Save</span>
            <span class="item-text" onclick="loadFromSlot(${i}, workspace)"style="text-align:center;">Load</span>
            <span class="item-text" onclick="askDelete(${i})"style="text-align:center;">Erase</span>
        `;
        SaveLoad.appendChild(div);
    }
}
function askDelete(slotNumber) {
    slotToDelete = slotNumber
    const raw = localStorage.getItem(SAVE_PREFIX + slotNumber)
    if(!raw) {window.alert(`Why Delete slot if it\'s empty?`); return}
    ConfirmWarning.classList.add('open')
}


confirmYes.addEventListener('click', () => {
    if (slotToDelete !== null) {
        deleteSlot(slotToDelete)
        renderSlots()
    }
    ConfirmWarning.classList.remove('open')
})

confirmNo.addEventListener('click', () => {
    ConfirmWarning.classList.remove('open')
})

renderSlots() 
