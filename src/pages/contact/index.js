export { default } from '../../components/_pages/contact'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}