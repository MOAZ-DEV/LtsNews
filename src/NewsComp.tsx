import arrowSvg from "./assets/arrow.svg";
export const NewsCompo = (prop: any) => {

    const { artic } = prop,
        onImageError = (e: any) => {
            e.target.style.display += "none"
        }

    return <a className="itemOuter" href={artic.url}>
        <div className="item" key={artic.id}>

<div className="topper">
    {artic.author ? <div className="author">{artic.author}</div> : <span></span>}
    <div className="date">
        {artic.published.substring(0, 4)}, {artic.published.substring(5, 7)}<br />
        <h2>{artic.published.substring(8, 10)}</h2>
    </div>
</div>

<div className="content">
    <h2 className="title">{artic.title}</h2>
    <h4 className="title">{artic.description}</h4>
</div>

<div className="downer">
    {artic.category ? <div className="categories">
        {artic.category.map((_catego: any) =>
            <><div className="catego">{_catego}</div> <span>|</span></>
        )}
    </div>
        : null}
    <a className="link" href={artic.url}>
        <img src={arrowSvg} alt="" />
    </a>
</div>
<img className="bgi" src={artic.image || null} onError={e => onImageError(e)}
    loading="lazy" alt="news image" />

</div>
    </a>;
};