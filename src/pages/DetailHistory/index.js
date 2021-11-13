export { default } from '../../components/_pages/DetailHistory'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}