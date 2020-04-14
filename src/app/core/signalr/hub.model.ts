export interface IHub {
  id: string;
  name: string;
  nameToSearch: string;
  url: string;
  description: string;
  active: boolean;
  methods: IMethods[];
  streams: IStream[];
}


interface IMethods {
  name: string;
}

interface IStream {
  name: string;
}
