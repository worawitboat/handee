export { default } from '../../components/_pages/edit'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}