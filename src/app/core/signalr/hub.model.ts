export interface IHub {
  name: string;
  nameToSearch: string;
  url: string;
  description: string;
  active: boolean;
  channels: IChannel[];
  events: IEvent[];
}


interface IChannel {
  name: string;
}

interface IEvent {
  name: string;
}
