export { default } from '../../components/_pages/MenuOrderhandee'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}