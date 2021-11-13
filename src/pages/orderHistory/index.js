export { default } from '../../components/_pages/orderHistory'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}