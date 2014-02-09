console.log('Debugging message');

function notDefined() {
    try {
        someFunction(); // undefined
    } catch (e) {
        console.error(e);
    }
}

notDefined();
