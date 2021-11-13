export { default } from '../../../../../../../../components/_pages/rate'

export async function getServerSideProps(context) {

  return { props: { appName: "handee" } }

}