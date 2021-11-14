export { default } from '../../../../components/_pages/HandeeSuccess'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}