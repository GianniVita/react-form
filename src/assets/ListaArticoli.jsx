export default ListaArticoli;


const articoli = [
    {
        id: 1,
        titolo: "Introduzione a JavaScript Moderno"
    },
    {
        id: 2,
        titolo: "Guida Completa ai CSS Grid Layout"
    },
    {
        id: 3,
        titolo: "Best Practice per il Deploy di Applicazioni Web"
    },
    {
        id: 4,
        titolo: "L'Ascesa dell'Intelligenza Artificiale nel Web Development"
    }
];      


function ListaArticoli() {
    return (
        <ul>
            {articoli.map(articolo => (
                <li key={articolo.id}>{articolo.titolo}</li>
            ))}
        </ul>
    );
}
