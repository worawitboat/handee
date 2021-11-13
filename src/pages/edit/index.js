export { default } from '../../components/_pages/edit'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}