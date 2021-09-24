export { default } from '../../components/_pages/boat'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}