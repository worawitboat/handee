export { default } from '../../../../components/_pages/Tracking'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}