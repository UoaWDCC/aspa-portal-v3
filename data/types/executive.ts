interface ExecutiveRequest {
  description: string;
  name: string;
  status: string;
  title: string;
}

export interface ExecutiveResponse {
  description: string;
  name: string;
  title: string;
}

export interface ExecutiveSchema {
  Executives: ExecutiveRequest[];
}
