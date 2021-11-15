export { default } from '../../../../components/_pages/handeeSuccess'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}