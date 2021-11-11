export { default } from '../../components/_pages/orderhandee'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}