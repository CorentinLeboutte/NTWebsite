import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

        function validateForm() {
            var name = document.forms["myForm"]["name"];
            var email = document.forms["myForm"]["email"];
            var message = document.forms["myForm"]["message"];

            if (name.value == "") {
                document.getElementById('errorname').innerHTML = "Veuillez entrez un nom valide";
                name.focus();
                return false;
            } else {
                document.getElementById('errorname').innerHTML = "";
            }

            if (email.value == "") {
                document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
                email.focus();
                return false;
            } else {
                document.getElementById('erroremail').innerHTML = "";
            }

            if (email.value.indexOf("@", 0) < 0) {
                document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
                email.focus();
                return false;
            }

            if (email.value.indexOf(".", 0) < 0) {
                document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
                email.focus();
                return false;
            }

            if (message.value == "") {
                document.getElementById('errormsg').innerHTML = "Veuillez entrez un message valide";
                message.focus();
                return false;
            } else {
                document.getElementById('errormsg').innerHTML = "";
            }

            return true;
        }
    }

}


