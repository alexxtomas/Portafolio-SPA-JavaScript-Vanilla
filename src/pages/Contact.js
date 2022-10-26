import { template as gratitude } from "../components/Gratitude";
import { $ } from "../utils/$";
import { formValidator } from "../utils/formValidator";

export const template = () => `
    <section class="contact">
        <span>
        If you found my profile interesting, you can leave me a message with your name and email and I will contact you! </span >
        <form id="form">
            <div class="field">
                <label for="from_name">Name</label>
                <input type="text" name="from_name" id="from_name">
            </div>
            <div class="field">
                <label for="email_id">Your Email</label>
                <input type="email" name="email_id" id="email_id">
            </div>
            <div class="field">
                <label for="message">Message</label>
                <textarea rows="12" cols="100"  name="message" id="message"></textarea>
            </div>
            <button id="button">SEND</button>
        </form>
    </section>

`

export const listeners = () => {
    const btn = $('button')
    const name = $('#from_name')
    const email = $('#email_id')
    const message = $('#message')

    $('form')?.addEventListener('submit',  function(event) {
    event.preventDefault();

    btn.value = 'Sending...'

    const serviceID = 'default_service'
    const templateID = 'template_165zp72'

    formValidator(name.value, email.value, message.value)
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        btn.value = 'Send'
        name.value = ''
        email.value = ''
        message.value = ''
        gratitude()
        
        }, (err) => {
        btn.value = 'Send'
        alert(JSON.stringify(err))
        });
    });
}