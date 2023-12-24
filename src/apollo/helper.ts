export interface getUser {
  user: {
    docs: {
      name: string;
      uuid: string;
      userUuid: string;
      createdTimestamp: string;
    }[];
    uuid: string;
    name: string;
    nick: string;
  };
}
