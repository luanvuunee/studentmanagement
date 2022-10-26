

export interface ListReponse<T> {
    data: T[],
    pagination: PagingParams
}


export interface PagingParams {
    _limit: number,
    _page: number,
    _total: number
}

export interface ListParams {
    _page: number;
    _limit: number;
    _sort: string;
    _order: 'asc' | 'desc';

    [key:string]: any
}