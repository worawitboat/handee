export { default } from '../../../../../components/_pages/SuccessPage'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}