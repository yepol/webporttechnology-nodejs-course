import fs from "fs/promises";
import path from 'path';
import {fileURLToPath} from 'url';
import {nanoid} from 'nanoid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contactsPath = path.join(__dirname, '/db', 'contacts.json');

const updateContacts = async (contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

const listContacts = async () => {
    const contacts = await fs.readFile(contactsPath);
    try {
        return JSON.parse(contacts);
    } catch (e) {
        return e;
    }
}

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const contact = contacts.find(item => item.id === contactId);
    if (!contact) {
        return null;
    }
    return contact;
}

const updateContactById = async ({id, name, email, phone}) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1) {
        return null;
    }
    contacts[idx] = {id, name, email, phone};
    await updateContacts(contacts);
    return contacts[idx];
}

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === contactId);
    if (idx === -1) {
        return null;
    }
    const [result] = contacts.splice(idx, 1);
    await updateContacts(contacts);
    return result;
}

const addContact = async (data) => {
    const contacts = await listContacts();
    const newContact = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        id: nanoid()
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
}

export default {
    listContacts,
    getContactById,
    updateContactById,
    removeContact,
    addContact
}


