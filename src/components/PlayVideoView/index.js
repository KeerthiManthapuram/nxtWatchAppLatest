import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike} from 'react-icons/ai'

import {BiDislike} from 'react-icons/bi'

import {RiMenuAddFill} from 'react-icons/ri'

import {
  VideoDetailsHolder,
  VideoHeading,
  Line,
  VideoCardText,
  UserReactionsHolder,
  IconText,
  IconButton,
  HorizontalRule,
  VideoProfileChannelHolder,
  ProfileImg,
  VideoTextHolder,
  ChannelName,
  Description1,
  Description2,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisliked, clickedLike, clickedDislike} = props
  const {
    id,
    title,
    videoUrl,
    thumbnailUrl,
    channelName,
    profileImageUrl,
    subscriberCount,
    viewCount,
    publishedAt,
    description,
  } = videoDetails
  const onClickingLike = () => {
    clickedLike()
  }

  const onClickingDislike = () => {
    clickedDislike()
  }

  const time = formatDistanceToNow(new Date(publishedAt))

  console.log(`${id} and ${thumbnailUrl} `)

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme, savedVideos, addVideo, removeVideo} = value
        console.log(savedVideos)
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const onClickingSave = () => {
          if (isSaved) {
            removeVideo(videoDetails.id)
          } else {
            addVideo(videoDetails)
          }
        }

        const iconColor = '#64748b'
        const saveLabel = isSaved ? 'Saved' : 'Save'
        return (
          <VideoDetailsHolder lighttheme={isLightTheme}>
            <ReactPlayer url={videoUrl} controls width="100%" height="70vh" />
            <VideoHeading lighttheme={isLightTheme}>{title}</VideoHeading>
            <Line>
              <VideoCardText lighttheme={isLightTheme}>
                {viewCount} views . {time}
              </VideoCardText>
              <UserReactionsHolder>
                <IconText>
                  <IconButton
                    color={isLiked ? '#2563eb' : iconColor}
                    onClick={onClickingLike}
                  >
                    <AiOutlineLike size="1.4rem" />
                    Like
                  </IconButton>
                </IconText>
                <IconText>
                  <IconButton
                    color={isDisliked ? '#2563eb' : iconColor}
                    onClick={onClickingDislike}
                  >
                    <BiDislike size="1.4rem" style={{marginRight: '4px'}} />
                    Dislike
                  </IconButton>
                </IconText>
                <IconText>
                  <IconButton
                    onClick={onClickingSave}
                    color={isSaved ? '#2563eb' : iconColor}
                  >
                    <RiMenuAddFill size="1.4rem" />
                    {saveLabel}
                  </IconButton>
                </IconText>
              </UserReactionsHolder>
            </Line>
            <HorizontalRule lighttheme={isLightTheme} />
            <VideoProfileChannelHolder>
              <ProfileImg src={profileImageUrl} alt="channel logo" />
              <VideoTextHolder>
                <ChannelName lighttheme={isLightTheme}>
                  {channelName}
                </ChannelName>
                <VideoCardText lighttheme={isLightTheme}>
                  {subscriberCount} subscribers
                </VideoCardText>
                <Description1 lighttheme={isLightTheme}>
                  {description}
                </Description1>
              </VideoTextHolder>
            </VideoProfileChannelHolder>
            <Description2 lighttheme={isLightTheme}>{description}</Description2>
          </VideoDetailsHolder>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default PlayVideoView
