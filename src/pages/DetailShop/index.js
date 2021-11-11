export { default } from '../../components/_pages/DetailShop'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}