document.querySelector('click', async e => {
    const [zettleDirHandle] = await window.showOpenFilePicker();
    const zettleDir = await zettleDirHandle.getFile();
    console.log (zettleDir)

})