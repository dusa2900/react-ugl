import React from 'react';
import {  PrimaryButton , CompoundButton } from '@fluentui/react/lib/Button';
 import { IContextualMenuProps, IIconProps, Stack, IStackStyles} from '@fluentui/react';

//  const stackTokens: IStackTokens = { childrenGap: 40 };
const menuProps: IContextualMenuProps ={
    items: [
        {
            key: 'emailMessage',
            text: 'Email message',
            iconProps: { iconName: 'Mail'},
        },
        {
            key: 'calendarEvent',
            text: 'Calendar event',
            iconProps: { iconName: 'Calendar' },
          }
    ]
}

const addIcon: IIconProps ={ iconName:'Add'};
const mailIcon: IIconProps = {iconName: 'Mail'};
const stackStyles: Partial<IStackStyles> = { root: {height:44}};

export const Button=()=>{
    return(
        // <Stack>
        // <p>Fluent UI button</p>
        // <PrimaryButton onClick={click}  text="Submit" /><br/>
        // <CompoundButton  secondaryText="This is the secondary text.">Primary</CompoundButton>
        
        // </Stack>
            <Stack horizontal styles={stackStyles}>
            <CommandBarButton
              iconProps={addIcon}
              text="New item"
              // Set split=true to render a SplitButton instead of a regular button with a menu
              // split={true}
              menuProps={menuProps}
              disabled={disabled}
              checked={checked}
            />
            <CommandBarButton iconProps={mailIcon} text="Send mail" disabled={disabled} checked={checked} />
          </Stack>
    )
}
function click()
{
    alert("Hey, you clicked button")
}