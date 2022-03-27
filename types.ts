enum AttachmentType {
    Picture,
    Link,
    File
}

// Cmd + Hover "Attachment" to see the popup with scroll bars
// As soon as you try to scroll this bar the popup closes
// "field15" is the last item displayed without the scrolling, other are hidden
type Attachment = {
    userId: number;
    createdAt: Date;
    attachmentType: AttachmentType;

    // Some example fields (alternative to real amount of fields in a real project)
    field1?: string;
    field2?: string;
    field3?: string;
    field4?: string;
    field5?: string;
    field6?: string;
    field7?: string;
    field8?: string;
    field9?: string;
    field10?: string;
    field11?: string;
    field12?: string;
    field13?: string;
    field14?: string;
    field15?: string;
    field16?: string;
    field17?: string;
    field18?: string;
    field19?: string;

}

type User  = {
    id: number;
    login: string;
    password: string;
    name: string;
    email: string;
    attachments: Attachment[];

    otherData?: {
        someField: any;
        anotherField: any;
    }
}


const user: User = { // Hover the "User" type to see the ugly type documentation
    id: 1,
    login: '',
    password: '',
    name: '',
    email: '',
    attachments: [
        {
            userId: 1,
            createdAt: new Date(),
            attachmentType: AttachmentType.Picture
        }
    ]

}

