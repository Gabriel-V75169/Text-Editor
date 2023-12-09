const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    
    event.preventDefault();

    window.defferedPrompt = event;

    window.butInstall.style.display = 'block';

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    if (defferedPrompt) {

        defferedPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        console.log('The user chose', result);
        window.deferredPrompt = null;
        window.butInstall.style.display = 'none';

    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed', event)
});
