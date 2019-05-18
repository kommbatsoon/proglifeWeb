import {getChildLabel} from './dateConfig';

// Start page view
export const LOGO_TEXT = {begin: 'myfamily', end: 'kids'};
export const LOGIN_TEXT = 'Log in';
export const START_TITLE_TEXT = 'Where parents help each other';
export const START_SUBTITLE_TEXT = 'Moms and dads with children like your';
export const START_CREATE_BTN_TEXT = 'Create an account';
export const START_NEXT_BTN_TEXT = 'Next';

// Header view
export const BOOKMARKS_HEADER_TEXT = 'Saved posts';
export const NO_DATA_TEXT = 'No data';
export const SEARCH_PLACEHOLDER_TEXT = 'Qestions, posts, topics…';

// Topics view
export const TOPICS_BAR_TITLE_TEXT = 'Topics you follow';

// Posts view
export const POSTS_LIST_TITLE_TEXT = (count) => `${count} parents in MyFamily`;
export const POSTS_LIST_SUBTITLE_TEXT = 'Usually reply in 10 min';
export const POSTS_LIST_LIKE_TEXT = 'Like';
export const ADD_POST_CONTROL_TEXT = 'Ask your questions…';
export const ADD_POST_CONTROL_SUBTEXT = 'Post';

// Comments
export const COMMENTS_TITLE_TEXT = 'Last comments';
export const COMMENTS_ADD_PLACEHOLDER_TEXT = 'Write your comment…';
export const COMMENTS_ADD_BUTTON_TEXT = 'Post';
export const SEE_ALL_TEXT = (count) => `Se all (${count})`;

// Search
export const SEARCH_RESULT_TEXT = 'Search results: ';
export const SEARCH_NO_DATA_TEXT = 'No results';
export const SEARCH_COUNT_TEXT = (count) => `${count} posts`;

// Add post modal

export const ADD_POST_TITLE_TEXT = 'New post or question';
export const ADD_POST_TITLE_PLACEHOLDER_TEXT = 'Заголовок…';
export const ADD_POST_TEXT_PLACEHOLDER_TEXT = 'Задайте свой вопрос или дайте совет…';
export const ADD_POST_TOPICS_TITLE_TEXT = 'Choose topics for your post';
export const ADD_POST_ADD_PICTURE_TEXT = 'Add photos';
export const ADD_POST_ADD_TOPIC_TEXT = '+Add new';
export const ADD_POST_ADD_POST_TEXT = 'Post';
export const ADD_POST_NO_TOPICS_TEXT = 'Please, select one or more topics for yout post. You will get more comments and aswers';

// Edit profile modal

export const EDIT_PROFILE_TITLE_TEXT = 'Edit profile';
export const DELETE_PROFILE_TITLE_TEXT = 'Delete profile';
export const EDIT_PROFILE_NAME_LABEL = 'Name';
export const EDIT_PROFILE_PASSWORD_LABEL = 'Change password';
export const CURRENT_PASSWORD_PLACEHOLDER = 'Current password';
export const NEW_PASSWORD_PLACEHOLDER = 'New password';
export const REPEAT_PASSWORD_PLACEHOLDER = 'Repeat new password';
export const EDIT_PROFILE_ADD_PHOTO_TEXT = '+Add new';
export const EDIT_PROFILE_CHANGE_PHOTO_TEXT = 'Change';
export const EDIT_PROFILE_DELETE_PHOTO_TEXT = 'Delete';
export const EDIT_PROFILE_SAVE_TEXT = 'Save';
export const DELETE_PROFILE_BTN_TEXT = 'Delete profile';
export const LOGOUT_BTN_TEXT = 'Log Out';
export const DELETE_CONFIRMATION_TITLE_TEXT = 'Are you sure you want to delete your profile?';
export const DELETE_CONFIRMATION_CANCEL_TEXT = 'Cancel';
export const DELETE_CONFIRMATION_DELETE_TEXT = 'Delete';


// Settings modal

export const SETTINGS_TITLE_TEXT = 'Feed settings';
export const SETTINGS_OPTION_TEXT = (date) => `Show posts only from parents with ${date ? getChildLabel(date) : ''} kids`;
export const SETTINGS_TOPICS_TEXT = 'Topics you follow';
export const SETTINGS_RECOMMENDATIONS_TEXT = 'Recommendations';


// Manage kids modal

export const KIDS_SETTINGS_LIST_TITLE = 'Your kids';
export const KIDS_SETTINGS_ADD_TITLE = 'Add your kid';
export const KIDS_SETTINGS_EDIT_TITLE = 'Edit your kid';
export const KIDS_SETTINGS_ADD_ACTION_TEXT = '+ Add';
export const KIDS_SETTINGS_BACK_ACTION_TEXT = 'Back';
export const KIDS_SETTINGS_ADD_BTN_TEXT = 'Add';
export const KIDS_SETTINGS_SAVE_BTN_TEXT = 'Save';
export const KIDS_SETTINGS_EDIT_BTN_TEXT = 'Edit';
export const KIDS_SETTINGS_DELETE_BTN_TEXT = 'Delete';


// Account step

export const TITLE_TEXT = 'Create your account';
export const WITH_FACEBOOK_TEXT = 'Sign up with Facebook';
export const WITH_EMAIL_TEXT = 'or with email';
export const EMAIL_PLACEHOLDER_TEX = 'Hello@myfamily.co';
export const PASSWORD_PLACEHOLDER_TEX = 'Password';
export const RESEND_CODE_TEXT = 'Send new code again';
