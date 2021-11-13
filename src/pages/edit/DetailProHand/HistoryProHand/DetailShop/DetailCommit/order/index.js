export { default } from '../../../../../../../components/_pages/order'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}