export { default } from '../../components/_pages/DetailCommit'

export async function getStaticProps(context) {

  return { props: { appName: "handee" } }

}