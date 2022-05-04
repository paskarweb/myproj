//import { FC } from 'react';
import UsrData from "./data/userdata.json";

let users = UsrData.users;

export const AppUsrData = () => (
    <ul>
        <li>
            First Name: {users.FirstName}
        </li>
        <li>
            Short Biography: {users.ShortBiography}
        </li>
        <li>
            Public Contacts: {users.PublicContacts}
        </li>
    </ul>
)

export default () => AppUsrData;