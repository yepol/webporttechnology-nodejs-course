import contacts from './contacts.js';
import {Command} from 'commander';

const program = new Command();

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;
        case "get":
            const contact = await contacts.getContactById(id);
            console.log(contact);
            break;
        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            console.log(newContact);
            break;
        case "update":
            const updateContact = await contacts.updateContactById({id, name, email, phone});
            console.log(updateContact);
            break;
        case "remove":
            const removeBook = await contacts.removeContact(id);
            console.log(removeBook);
            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

await invokeAction(argv);