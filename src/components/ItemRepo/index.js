import { ItemContainer } from "./styles"

function ItemRepo({ name, linkRepo }) {
    return (
        <ItemContainer>
            <h3>Rafael</h3>
            <p>programador front-end</p>
            <p>{name}</p>
            {linkRepo && (
                <a href={linkRepo}>Ver repositório</a>
            )}
            <br />
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo
