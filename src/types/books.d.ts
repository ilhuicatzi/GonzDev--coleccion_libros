export interface Books {
    id:         string;
    slug:       string;
    body:       string;
    collection: string;
    data:       Data;
}

export interface Data {
    titulo:       string;
    autor:        string;
    area:         string;
    editorial:    string;
    imagen:       string;
    descripcion:  string;
    download_url: string;
}