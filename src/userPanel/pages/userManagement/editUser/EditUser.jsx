import { Container, Typography } from "@mui/material"
import { lazy, Suspense, useState } from "react"
import Selector from "../../../userPanelComponent/Selector"
import Loading from "../../../userPanelComponent/Loading"
import { useParams } from "react-router-dom"
import { useGetUserByIdQuery } from "../../../../globalState/admin/adminStateApis"
const UserProfileUpdate = lazy(() => import("./userProfileUpdate/userProfileUpdate"))
const LoginPasswordUpdate = lazy(() => import("./loginPasswordUpdate/LoginPasswordUpdate"))
const TransactionPasswordUpdate = lazy(() => import("./transactionPasswordUpdate/TransactionPasswordUpdate"))
const UserTransactionHistoryList = lazy(() => import("./userTransactionHistory/UserTransactionHistoryList"))
const AddFund = lazy(() => import("./addFund/AddFund"))
const ReferralTreeAndDataComponent = lazy(() => import("./referralTree/ReferralTreeAndDataComponent"))

const updateType = [
  "Profile update",
  "Login password",
  "Transaction password",
  "Referral tree",
  "Transaction history",
  "Fund deposit"
]

function EditUser() {

  const { id } = useParams()

  const { data, isLoading } = useGetUserByIdQuery({ id }, { skip: !id })

  const selectedUserData = data?.data

  const allComponents = {
    "Profile update": UserProfileUpdate,
    "Login password": LoginPasswordUpdate,
    "Transaction password": TransactionPasswordUpdate,
    "Referral tree": ReferralTreeAndDataComponent,
    "Transaction history": UserTransactionHistoryList,
    "Fund deposit": AddFund
  }

  const NotImplemented = () => <Typography color="error">Not implemented yet.</Typography>

  const [selectedType, setSelectedType] = useState(updateType[0])
  const [ActiveComponent, setActiveComponent] = useState(() => allComponents[selectedType] || NotImplemented)

  const handleComponentChange = (e) => {
    const type = e.target.value
    setSelectedType(type)
    const SelectedComponent = allComponents[type]
    setActiveComponent(() => SelectedComponent || NotImplemented)
  }

  return (
    <Container sx={{ mt: "100px" }}>
      <Typography variant="h5" fontWeight="bold" mb="2rem">Edit user</Typography>
      <Selector
        width={{ xs: "100%", sm: "350px" }}
        items={updateType}
        value={selectedType}
        shouldBeFullWidth={true}
        showDefaultOption={false}
        onChange={handleComponentChange}
      />
      <Suspense fallback={<Loading mt={"10rem"} />}>
        <ActiveComponent userData={selectedUserData} userDataLoading={isLoading} />
      </Suspense>
    </Container>
  )
}

export default EditUser;