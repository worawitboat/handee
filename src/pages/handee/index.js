export { default } from '../../components/_pages/handee'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}