export { default } from '../../components/_pages/DetailShop'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}