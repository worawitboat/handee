export { default } from '../../../components/_pages/DetailProHand'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}