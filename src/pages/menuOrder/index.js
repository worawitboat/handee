export { default } from '../../components/_pages/menuOder'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}