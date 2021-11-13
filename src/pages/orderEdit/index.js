export { default } from '../../components/_pages/orderEdit'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}