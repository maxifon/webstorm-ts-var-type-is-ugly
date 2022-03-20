enum AttachmentType {
    Picture,
    Link,
    File
}

type Attachment = {
    userId: number;
    createdAt: Date;
    attachmentType: AttachmentType;
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
        anotjerField: any;
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

