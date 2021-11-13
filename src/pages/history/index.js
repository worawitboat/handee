export { default } from '../../components/_pages/history'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}