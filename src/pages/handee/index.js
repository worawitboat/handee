export { default } from '../../components/_pages/Menuhandee'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}