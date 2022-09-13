import styled from "styled-components/macro";

import { Button, CredentialsLayout, CredentialsContainer, CredentialsTitle } from "../../../components/Layout/Layout"

import { ProfileForm } from "./ProfileForm";

import { User } from "../../../types/user";

const ProfileImage = styled.img`
	border-radius: 50%;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    object-fit: cover;
`;

type ProfileMessageProps = {
    error?: boolean;
}
const ProfileMessage = styled.p<ProfileMessageProps>`
	text-align: center;
    padding: 10px;
    font-size: 15px;
    text-decoration: ${(props) => props.error ? "underline;" : "none;"};
`;

const ProfileDescription = styled.div`
	margin-bottom: 20px;
	text-align: center;
`;

const ProfileDescriptionText = styled.p`
	font-weight: 200;
	font-size: 16px;
	color: rgb(175, 175, 175);
`;

export const ProfileCard = ({ userData, handleSaveProfileChanges, firstName, lastName, email, message, setEditProfile, editProfile, password, address, image }: { userData: User, handleSaveProfileChanges: () => void, firstName: string, lastName: string, email: string, message: string, setEditProfile: React.Dispatch<React.SetStateAction<boolean>>, editProfile: boolean, password: string, address: string, image: string }) => {
    return (
        <CredentialsLayout>
            <CredentialsContainer profile>
                <ProfileImage src={userData.image} alt="profile image" />
                <CredentialsTitle>{userData.firstName + " " + userData.lastName}</CredentialsTitle>
                {
                    editProfile ? (
                        <>
                            <ProfileForm handleSaveProfileChanges={handleSaveProfileChanges} firstName={firstName} lastName={lastName} email={email} password={password} address={address} image={image} userData={userData} setEditProfile={setEditProfile} />

                            <ProfileMessage error={message === "Your changes were successfully saved!" ? false : true}>
                                {message}
                            </ProfileMessage>
                        </>
                    ) : (
                        <>
                            <ProfileDescription>
                                <ProfileDescriptionText>{userData.email}</ProfileDescriptionText>
                                <ProfileDescriptionText>{userData.dateOfBirth}</ProfileDescriptionText>
                                <ProfileDescriptionText>{userData.address}</ProfileDescriptionText>
                            </ProfileDescription>

                            <Button onClick={() => setEditProfile(!editProfile)}>
                                Edit Profile
                            </Button>
                        </>
                    )
                }
            </CredentialsContainer>
        </CredentialsLayout>
    )
}