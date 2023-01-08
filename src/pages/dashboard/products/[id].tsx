export default function Product({wine}) {
  return (
    <div>
        <h1>{wine.wine}</h1>
    </div>
  )
}
export async function getStaticPaths() {
    try {
        const res = await fetch('http://localhost:3001/products/wineByYear/1999')
        const data = await res.json()
        const paths = data.map(({id}) => ({
            params: {id: `${id}`}
        }))
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error.message)
    }
}

export async function getStaticProps({params}) {
    const response = await fetch('http://localhost:3001/products/' + params.id)
    const wine = await response.json()
    return {
      props: {
        wine,
      },
    }
  }