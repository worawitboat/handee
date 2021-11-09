export { default } from '../../components/_pages/SelectOrderHand'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}