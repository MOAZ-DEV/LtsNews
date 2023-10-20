import { useState, useEffect } from "react";
import Axios from 'axios';
import { NewsCompo } from "./NewsComp";
interface statue {
    isLoading?: boolean,
    errors?: any
};
export interface articleIN {
    id: string,
    title: string,
    description: string,
    url: string,
    author: string,
    image: string,
    language: string,
    category: Array<string>,
    published: string
}
export const News = () => {

    const
        Host = 'https://api.currentsapi.services/v1/latest-news?',
        ApiKey = "mCSBbece4oIAc-0F1BcxtU4Exone9DZtop-uMpNdB6RVz1tv",
        [statue, setStatue] = useState<statue>(),
        [articles, setArticles] = useState<any>([]),
        [page, setPage] = useState(1);

    useEffect(() => {
        setStatue({ ...statue, isLoading: true });
        Axios
            .get(
                `${Host}&country=EG&apiKey=${ApiKey}&page_size=8&page_number=${1}`)
            .then(response => {!(page > 1) ?
                setArticles(response.data.news) :
                setArticles([...articles, ...response.data.news]);
                setStatue({ ...statue, isLoading: false })})
            .catch((err: any) =>
                setStatue({ ...statue, errors: err }));
    }, []);


    return <div className="newsWrap" onLoad={() => setStatue({ ...statue, isLoading: false }) }>
        {statue?.isLoading == true ? <>loading..</> : articles.map((artic: articleIN) => <>
            <NewsCompo key={artic.published} artic={artic} /><br />
        </>)}
    </div>;
}