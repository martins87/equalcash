import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import FirstPageSharpIcon from '@material-ui/icons/FirstPageSharp'
import LastPageSharpIcon from '@material-ui/icons/LastPageSharp'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { makeStyles, Theme } from '@material-ui/core/styles'

import Tables from './Tables'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '288px',
    height: '36px',
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 10px',
    cursor: disabled => disabled ? 'auto' : 'pointer',
    color: disabled => disabled ? 'rgba(37, 37, 37, 0.2)' : 'rgba(37, 37, 37, 0.7)'
  },
  page: {
    background: active => active ? 'rgba(37, 37, 37, 0.05)' : '#252525',
    width: '60px',
    height: '36px',
    borderRadius: '10px',
    display: 'grid',
    placeItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      background: active => active ? 'rgba(37, 37, 37, 0.2)' : 'rgba(37, 37, 37, 0.7)'
    }
  },
  pageNumber: {
    color: active => active ? 'rgba(37, 37, 37, 0.6)' : '#FFFFFF',
    fontFamily: 'Crimson Text',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '18px',
  },
}))

export type ArrowProps = {
  disabled: boolean,
  first?: boolean,
  previous?: boolean,
  next?: boolean,
  last?: boolean
}

export type PageProps = {
  active?: boolean,
  number: number
}

export type PagesProps = {
  currentPage: number,
  tablesPerPage: number,
  totalTables: number,
  paginate: any
}

const Arrow = ({ disabled, first = false, previous = false, next = false, last = false }: ArrowProps) => {
  const { arrow } = useStyles(disabled);

  return (
    <Box className={arrow}>
      {first && (
        <IconButton disabled={disabled} style={{marginRight: '-26px'}}>
          <FirstPageSharpIcon />
        </IconButton>
      )}
      {previous && (
        <IconButton disabled={disabled} style={{marginRight: '-10px'}}>
          <ChevronLeftIcon />
        </IconButton>
      )}
      {next && (
        <IconButton disabled={disabled} style={{marginLeft: '-10px'}}>
          <ChevronRightIcon />
        </IconButton>
      )}
      {last && (
        <IconButton disabled={disabled} style={{marginLeft: '-26px'}}>
          <LastPageSharpIcon />
        </IconButton>
      )}
    </Box>
  )
}

const Page = ({ active = false, number }: PageProps) => {
  const { page, pageNumber } = useStyles(active);

  return (
    <Box className={page}>
      <Typography className={pageNumber}>{number}</Typography>
    </Box>
  )
}

const Pages = ({ currentPage, tablesPerPage, totalTables, paginate }: PagesProps) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalTables / tablesPerPage); i++) pageNumbers.push(i)

  const renderPages = () => {
    return (
      <>
        <Grid item onClick={() => paginate(1)}>
          <Page active={1 === currentPage} number={1} />
        </Grid>
        <Grid item onClick={() => paginate(2)}>
          <Page active={2 === currentPage} number={2} />
        </Grid>
        <Grid item>
          <MoreHorizIcon style={{ color: 'rgba(37, 37, 37, 0.7)' }} />
        </Grid>
        <Grid item onClick={() => paginate(pageNumbers.length - 1)}>
          <Page active={pageNumbers.length - 1 === currentPage} number={pageNumbers.length - 1} />
        </Grid>
        <Grid item onClick={() => paginate(pageNumbers.length)}>
          <Page active={pageNumbers.length === currentPage} number={pageNumbers.length} />
        </Grid>
      </>
    )
  }

  return (
    <Grid container alignItems="center" justifyContent="center" spacing={1}>
      {(pageNumbers.length > 5) && (
        <Grid item onClick={() => paginate(1)}>
          <Arrow first disabled={currentPage < 3} />
        </Grid>
      )}
      <Grid item onClick={() => paginate(currentPage - 1)}>
        <Arrow previous disabled={currentPage === 1} />
      </Grid>
      {(pageNumbers.length <= 5) && pageNumbers.map((pageNumber, index) => (
        <Grid item key={index} onClick={() => paginate(pageNumber)}>
          <Page active={pageNumber === currentPage} number={pageNumber} />
        </Grid>
      ))}
      {(pageNumbers.length > 5) && renderPages()}
      <Grid item onClick={() => paginate(currentPage + 1)}>
        <Arrow next disabled={currentPage === pageNumbers.length} />
      </Grid>
      {(pageNumbers.length > 5) && (
        <Grid item onClick={() => paginate(pageNumbers.length)}>
          <Arrow last disabled={currentPage + 1 >= pageNumbers.length} />
        </Grid>
      )}
    </Grid>
  )
}

const Pagination = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [tablesPerPage] = React.useState(4)

  // Get current tables
  const indexOfLastTable = currentPage * tablesPerPage
  const indexOfFirstTable = indexOfLastTable - tablesPerPage
  // Simulation: number of pages
  const tables: number[] = []
  for (let i = 1; i <= 40 ; i++) tables.push(i)
  const currentTables = tables.slice(indexOfFirstTable, indexOfLastTable)

  const paginate = (pageNumber: number) => {
    let nextPage: number = pageNumber < 1 ? 1
      : pageNumber > Math.ceil(tables.length / tablesPerPage) ? Math.ceil(tables.length / tablesPerPage)
      : pageNumber;
    setCurrentPage(nextPage)
  }

  return (
    <>
      <Tables pageTables={currentTables} />
      <br />
      <Pages
        currentPage={currentPage}
        tablesPerPage={tablesPerPage}
        totalTables={tables.length}
        paginate={paginate} />
    </>
  )
}

export default Pagination
