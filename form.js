window.addEventListener( "load", function () {
    function sendData() {
        const sendRequest = new XMLHttpRequest();
        
        const signupInfo = new URLSearchParams(new FormData( signupForm ));

        sendRequest.addEventListener( "load", function ( event ) {
            alert( 'Your account was created!');
        });

        sendRequest.addEventListener( "error", function ( event ) {
            alert('Submission unsuccessful! Please try again.');
        });

        sendRequest.open( "POST", "http://localhost:5000/app/new/user" );

        sendRequest.send( signupInfo );

    }
});